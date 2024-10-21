import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header>
            <div className='md:flex justify-between items-center mx-10 py-5 border-b-2'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;