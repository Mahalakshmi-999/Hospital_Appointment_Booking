function bookAppointment() {
    const patientName = document.getElementById('patientName').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const doctor = document.getElementById('doctorSelect').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmenttime').value;
    if (patientName && email && phonenumber && doctor && date && time) {
        const appointmentDetails = `${patientName} - ${email} - ${phonenumber}
         - ${doctor} - ${date} - ${time}`;
        const appointmentList = document.getElementById('appointments');
        const listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(appointmentDetails));
        appointmentList.appendChild(listItem);
        alert('your appointement is submitted');
    }
   else
   {
        alert('Please fill in all fields');
    }
}
   function contact(){
        document.getElementById("demo").innerHTML = "CONTACTS:<ul><li>9087651234</li><li>abcd123@gmail.com</li></ul>";
        
   }


            




