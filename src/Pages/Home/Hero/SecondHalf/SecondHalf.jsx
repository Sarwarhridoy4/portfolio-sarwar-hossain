import blob from "../../../../assets/blob.svg";
import img from "../../../../assets/sarwar.png";
const SecondHalf = () => {
  return (
    <div className='w-full flex items-center justify-center relative'>
      <div className='w-full flex items-baseline justify-center bottom-[-10px]' style={{
        backgroundImage: `url("${blob}")`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
      }}>
        <img src={img} alt='sarwar-imaga' className='w-[60%]' />
      </div>
    </div>
  );
};

export default SecondHalf;
