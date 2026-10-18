import React, { useState } from 'react';

export default function ZenCodeLab() {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [simulatedRun, setSimulatedRun] = useState(null);

  const snippets = [
    {
      title: "School ERP Role-Based Access Guard",
      project: "CampusOne – School ERP",
      lang: "Node.js / Express.js",
      filename: "middleware/schoolRoleGuard.js",
      description: "Middleware checking JWT authentication and granular permissions for Administrators, Teachers, and Students.",
      code: `// Role-Based Authorization Guard for CampusOne ERP
export const requireSchoolRole = (allowedRoles = []) => {
  return (req, res, next) => {
    // 1. Verify user context populated by JWT token
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized: Missing or invalid token session."
      });
    }

    // 2. Validate user role against route permission list
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: \`Forbidden: Access denied for role '\${req.user.role}'. Required: \${allowedRoles.join(', ')}\`
      });
    }

    // 3. Attach school branch context and proceed
    req.branchId = req.user.branchId;
    next();
  };
};`,
      output: `[AUTH] Token verified for user: prof_banerjee@campusone.edu\n[ROLE_CHECK] Role 'TEACHER' verified for academic gradebook\n[ACCESS_GRANTED] Proceeding to route handler -> Status 200 OK`
    },
    {
      title: "Prisma & PostgreSQL Course Enrollment",
      project: "Helping Learn – LMS",
      lang: "Node.js / Prisma ORM",
      filename: "controllers/enrollmentController.js",
      description: "Atomic database transactions handling student course enrollment, verification, and audit logs.",
      code: `// Atomic Course Enrollment Transaction
export async function enrollStudentInCourse(req, res) {
  const { courseId } = req.body;
  const studentId = req.user.id;
  
  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Validate course availability and active state
      const course = await tx.course.findUnique({
        where: { id: courseId, isActive: true }
      });
      if (!course) throw new Error("Course is currently inactive or not found.");

      // 2. Check for duplicate active enrollments
      const existing = await tx.enrollment.findFirst({
        where: { courseId, studentId }
      });
      if (existing) throw new Error("Student already enrolled in this curriculum.");

      // 3. Create verified enrollment record
      return await tx.enrollment.create({
        data: { courseId, studentId, enrolledAt: new Date(), progress: 0 }
      });
    });

    return res.status(201).json({ status: true, data: result });
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
}`,
      output: `[TX_START] Initiated Prisma relational transaction $tx\n[VALIDATED] Course #CRS-104 ('Full-Stack Node.js & React') is active\n[DB_COMMIT] Created Enrollment #ENR-99420 for student #STU-582\n[SUCCESS] Response status: 201 Created`
    },
    {
      title: "PHP REST API & MySQL Service Controller",
      project: "Diamond Pest Control",
      lang: "PHP / MySQL",
      filename: "api/bookings/create.php",
      description: "Prepared statement REST API handling client appointment bookings, sanitization, and DB execution.",
      code: `<?php
// PHP REST API Controller - Service Booking Endpoint
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once '../../config/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $clientId = filter_var($input['client_id'] ?? null, FILTER_VALIDATE_INT);
    $serviceType = htmlspecialchars(strip_tags($input['service_type'] ?? ''));
    $appointmentDate = $input['appointment_date'] ?? null;

    if (!$clientId || empty($serviceType)) {
        http_response_code(422);
        echo json_encode(['status' => false, 'message' => 'Invalid or missing booking parameters.']);
        exit;
    }

    $db = (new Database())->connect();
    $sql = "INSERT INTO service_bookings (client_id, service_type, appointment_date, status, created_at) 
            VALUES (:client_id, :service_type, :appointment_date, 'PENDING', NOW())";
    
    $stmt = $db->prepare($sql);
    $stmt->execute([
        ':client_id' => $clientId,
        ':service_type' => $serviceType,
        ':appointment_date' => $appointmentDate
    ]);

    http_response_code(201);
    echo json_encode([
        'status' => true,
        'booking_id' => $db->lastInsertId(),
        'message' => 'Service appointment successfully scheduled.'
    ]);
    exit;
}`,
      output: `[PHP_REQUEST] POST /api/bookings/create.php\n[DB_CONNECT] PDO MySQL connection established\n[STMT_EXEC] Prepared statement executed: client_id=1409, type='Commercial Inspection'\n[RESPONSE] 201 Created, booking_id: 3942`
    }
  ];

  const current = snippets[activeSnippetIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setSimulatedRun(current.output);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 reveal">
      
      {/* File Explorer / Sidebar */}
      <div className="lg:col-span-4 space-y-4">
        {snippets.map((snippet, idx) => {
          const isActive = activeSnippetIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                setActiveSnippetIndex(idx);
                setSimulatedRun(null);
              }}
              className={`w-full text-left sketch-border p-5 magnetic transition-all ${
                isActive
                  ? 'bg-[var(--mustard)] shadow-[4px_4px_0_var(--ink)] -translate-y-1'
                  : 'bg-[var(--paper)] hover:bg-[var(--cream)] hover:-translate-y-0.5'
              }`}
              data-cursor="hover"
            >
              <div className="font-hand text-lg text-[var(--coral)] mb-1">{snippet.lang}</div>
              <h3 className="font-display text-xl mb-2">{snippet.title}</h3>
              <p className="font-sans text-xs opacity-80 leading-relaxed line-clamp-2">
                {snippet.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Code Editor Window */}
      <div className="lg:col-span-8">
        <div className="sketch-border-thick bg-[var(--ink)] text-[var(--paper)] overflow-hidden h-full flex flex-col">
          
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--ink-soft)] border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--coral)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--mustard)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--teal)]"></div>
              <span className="ml-3 font-sans text-xs opacity-70">{current.filename}</span>
            </div>
            <button onClick={handleCopy} className="text-xs font-bold bg-[var(--paper)] text-[var(--ink)] px-2 py-1 rounded hover:bg-[var(--mustard)] transition-colors magnetic" data-cursor="hover">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Editor Content */}
          <div className="p-6 overflow-auto text-sm font-mono leading-relaxed text-[var(--cream)] flex-grow" style={{tabSize: 4}}>
            <pre className="whitespace-pre-wrap break-words">
              <code>{current.code}</code>
            </pre>
          </div>

          {/* Editor Footer / Run Simulation */}
          <div className="p-4 border-t-2 border-dashed border-[var(--ink-soft)] bg-[#111]">
            {!simulatedRun ? (
              <button onClick={handleRunSimulation} className="btn-primary py-2 px-4 text-sm magnetic" style={{background: 'var(--teal)', borderColor: 'var(--teal)'}} data-cursor="hover">
                <i className="fas fa-play mr-2"></i> Run Simulation
              </button>
            ) : (
              <div className="font-mono text-xs text-[var(--teal)] whitespace-pre-wrap">
                {simulatedRun}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
