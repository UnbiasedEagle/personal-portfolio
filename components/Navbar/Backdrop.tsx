type BackdropProps = {
  show: boolean;
};

const Backdrop: React.FC<BackdropProps> = ({ show }) => {
  return (
    <div
      className={`fixed inset-0 z-20 duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      } bg-black/50`}
    ></div>
  );
};
export default Backdrop;
