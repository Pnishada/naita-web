import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TopBar from '../components/TopBar/TopBar';
import Breadcrumb from '../components/BreadCrumb/BreadCrumb';
import { Lightbulb, FileText, CheckCircle, MapPin, ClipboardList } from 'lucide-react';

export default function RPL() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />

      <div className="mt-[90px] bg-gradient-to-r from-red-700 to-red-900 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Recognition of Prior Learning (RPL)</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Obtain your National Vocational Qualification (NVQ) Certificate through prior skills recognition.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-16 text-gray-800">
        {/* NVQ Framework */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Lightbulb /> NVQ Framework</h2>
            <p className="text-gray-700">
              The NVQ framework allows you to earn certifications via formal training or by recognizing your skills
              acquired through informal means such as workplace learning or experience.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md bg-white p-6">
            <img src="/images/framework.jpeg" alt="NVQ Framework" className="w-full h-auto rounded-lg" />
          </div>
        </section>

        {/* Advantages */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-red-800">Benefits for Certificate Holders</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Skill certification, not just a training credential</li>
              <li>Recognized nationally and internationally</li>
              <li>Opportunities for further study and career growth</li>
              <li>Better job prospects locally and abroad</li>
              <li>Skill-based job placement</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-red-800">Benefits for Employers</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Certified and industry-relevant talent</li>
              <li>Effective recruitment and career advancement</li>
              <li>Assurance of quality and standardized competencies</li>
            </ul>
          </div>
        </section>

        {/* What is RPL */}
        <section className="bg-red-50 border-l-4 border-red-600 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><FileText /> What is RPL?</h2>
          <p className="mb-2">
            RPL (Recognition of Prior Learning) is an assessment process that certifies competencies acquired
            through informal learning, experience, or training. It can lead to NVQ certification or credit transfer.
          </p>
          <p>
            RPL includes both direct skill assessment and course-based credit mapping to determine qualification equivalence.
          </p>
        </section>

        {/* Supportive Evidence */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><ClipboardList /> Supportive Evidence for RPL</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Work samples and project outputs</li>
              <li>Routine reports signed by supervisors</li>
              <li>Recommendations from industry professionals</li>
              <li>Visual proofs and demonstrations</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Certificates of service/employment</li>
              <li>Practical and theoretical exams</li>
              <li>Observational assessments</li>
            </ul>
          </div>
        </section>

        {/* Qualifications */}
        <section className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-red-800">Qualifications & Experience Requirements</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="font-semibold mb-2">For NVQ Level 2 & 3</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>1.5 years relevant experience</li>
                <li>Grama Niladhari certificate + DS attestation</li>
                <li>Service or business certificates</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">For NVQ Level 4</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>2 years after NVQ 2/3 or</li>
                <li>5 years direct formal/informal experience</li>
                <li>EPF/Business Reg/Grama Niladhari proof</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Venue */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><MapPin /> Where is the Assessment Held?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>TVEC-accredited training centers</li>
            <li>Approved industry locations by NAITA/VTA</li>
          </ul>
        </section>

        {/* Registration Info */}
        <section className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CheckCircle /> Registration & Fees</h2>
          <p className="mb-2 text-gray-700">Fee: <strong>Rs. 1,000/-</strong></p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Pay via People's Bank (A/C No. 174100110350223)</li>
            <li>Or submit directly at NVQ Testing Section</li>
            <li>Attach receipt with the application form</li>
          </ul>
          <p className="font-semibold mt-4">Submission Address:</p>
          <p>
            National Vocational Qualification Testing Section<br />
            National Apprentice & Industrial Training Authority,<br />
            971, Sri Jayawardenepura Mawatha,<br />
            Welikada, Rajagiriya.<br />
            Tel: +94 11 2863680
          </p>
          <p className="mt-3">
            <a
              href="http://www.tvec.gov.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline font-medium"
            >
              Visit TVEC Website for More Info
            </a>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
