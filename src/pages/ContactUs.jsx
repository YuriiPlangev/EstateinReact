import ContactIntro from "../widgets/contact/ContactIntro"
import ContactConnect from "../widgets/contact/ContactConnect"
import ContactLocations from "../widgets/contact/ContactLocations"
import ContactWorld from "../widgets/contact/ContactWorld"
import Info from "../widgets/info/Info"
function ContactUs () {
 return (
   <>
  <ContactIntro />
  <main className="main container">
  <ContactConnect />
  <ContactLocations />
  <ContactWorld />
  <Info />
</main>
</>

 )
}
export default ContactUs