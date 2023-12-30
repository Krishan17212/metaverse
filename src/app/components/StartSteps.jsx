import styles from "../styles";

const StartSteps = ({ listNumber, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <p className="font-bold text-white text-[20px]">
          {listNumber < 10 ? "0" : ""}
          {listNumber}
        </p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
