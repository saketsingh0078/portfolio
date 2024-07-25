import profilePhoto from "../assets/photo.png";

export const Home = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 h-[90vh] ">
      <img src={profilePhoto} alt="profile-photo" />
    </div>
  );
};
