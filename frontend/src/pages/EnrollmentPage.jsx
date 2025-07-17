import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import EnrollmentForm from "../components/Enrollment/EnrollmentForm";
import Navbar from "../components/Navbar/Navbar";

export default function EnrollmentPage(){

  return(
    <div>
    <Navbar/>
    <Breadcrumb/>
    <div className="bg-gray-200 p-20">
      <EnrollmentForm/>
    </div>
    </div>
  )

}