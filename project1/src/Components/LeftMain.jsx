const LeftMain = ({ imgAudio, imgData, imgMaker, imgMeet }) => {
  return (
    <>
      <div className="left">
        <div>
          <h1>Make</h1>
          <h1>remote work</h1>
        </div>

        <p className="desc">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="learn-btn">Learn more</button>
        <div className="logo">
          <img src={imgData} />
          <img src={imgAudio} />
          <img src={imgMeet} />
          <img src={imgMaker} />
        </div>
      </div>
    </>
  );
};

export default LeftMain;
