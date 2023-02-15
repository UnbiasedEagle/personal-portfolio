import FooterContent from './FooterContent';
import StartProject from './StartProject';

const ContactSection: React.FC = () => {
  return (
    <footer id='contact' className='px-6 pt-20 pb-8 mt-36 bg-primary'>
      <StartProject />
      <FooterContent />
    </footer>
  );
};
export default ContactSection;
