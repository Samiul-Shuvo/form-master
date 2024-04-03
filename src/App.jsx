
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SipleForm from './components/SimpleForm/SipleForm'

function App() {
//   const handleSignUpSubmit = data =>{
//     console.log('sign up data',data )
// }
//   const handleUpdateProfile = e =>{
//     console.log('Update Profile data',data )
// }

  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>





      {/* <SipleForm></SipleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'sign up'} handleSubmit={handleSignUpSubmit}> </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'> </ReuseableForm> */}
    </>
  )
}

export default App
