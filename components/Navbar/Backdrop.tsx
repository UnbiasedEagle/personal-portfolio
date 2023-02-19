type BackdropProps = {
  show: boolean;
};

const Backdrop: React.FC<BackdropProps> = ({ show }) => {
  return (
    <div
      className={`fixed inset-0  duration-300 ${
        show ? 'opacity-100 z-20' : 'opacity-0 -z-10'
      } bg-black/50`}
    ></div>
  );
};
export default Backdrop;
