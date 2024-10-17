import logo from "@/assets/img/OnMyWay.png";
function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={logo} alt="OnMyWay Logo" className="w-32 h-32 animate-spin" />
    </div>
  );
}

export default Loading;
