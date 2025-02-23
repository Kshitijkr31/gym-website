import React from "react";

const Gallary = () => {
  const gallary = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnAa_BU4QA1_WcvhAjtkeVIjCmTb_HBEXrg&s.jpg",
    "https://cdn.pixabay.com/photo/2024/03/30/19/29/ai-generated-8665327_640.png",
    "https://raw.githubusercontent.com/Zeeshu911/MERN_STACK_GYM_WEBSTITE_WITH_EMAIL_FUNCTIONALITY/main/frontend/public/img3.jpg",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2023-08/shy-girl-workout-tiktok-mc-230828-02-ab104e.jpg",
    "https://raw.githubusercontent.com/Zeeshu911/MERN_STACK_GYM_WEBSTITE_WITH_EMAIL_FUNCTIONALITY/main/frontend/public/img4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXupjqiyllrXKNE2ceeZA5QkoMfOJPd_kFbw&s.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyU4BKEO_uB4YmRXuoKz5Ja49Hfbj70OyrQ_Z11MWUaKDUTaElh7DVAih2CoGNfn5eLjo&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOt3xaeetN0EqkawWe3sQCm_73yEwtnB1OvIDeMg7lj7u4vpjhEM-uWa-5n78BgDC3KE&usqp=CAU.jpg",
    "https://raw.githubusercontent.com/Zeeshu911/MERN_STACK_GYM_WEBSTITE_WITH_EMAIL_FUNCTIONALITY/main/frontend/public/img7.jpg"

  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {
            gallary.slice(0, 3).map((element, index) => (
              <img key={index} src={element} alt="gallaryimage" />
            ))
          }
        </div>
        <div>
          {
            gallary.slice(3, 6).map((element, index) => (
              <img key={index} src={element} alt="gallaryimage" />
            ))
          }
        </div>
        <div>
          {
            gallary.slice(6, 9).map((element, index) => (
              <img key={index} src={element} alt="gallaryimage" />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Gallary;