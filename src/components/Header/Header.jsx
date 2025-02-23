import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="py-5 flex justify-between border-[#11111126]  items-center border-b-2">
            <h1 className='text-2xl font-bold'>Knowladge Cafe</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;