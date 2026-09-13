import tldrHomeImage from '../assets/tldr_home.jpg'

function HomePage() {
    return (
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-12">
            <h2 className='text-center font-semibold text-3xl'>Welcome to the Tl;dr Kitchen</h2>
            <img 
                src={tldrHomeImage}
                className="w-full max-w-3xl rounded-3xl object-cover shadow-xl"
                alt='ingredients on a table'
            />
            <p className="max-w-2xl text-center text-xl leading-relaxed">Delicious recipes for making memories around your own table—without having to read about mine.</p>
        </div>
    )
}

export default HomePage;