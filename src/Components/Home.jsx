import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ecommerce from './assets/ecommerce.png';


const Home = () => {
    return (

        <div id="intro" className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center bg-gray-50 px-14 ">
            <div className="text  md:w-1/2 my-8 ">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Hey,</h1>
                <h1 className="text-2xl font-semibold text-gray-700 leading-relaxed mb-6">
                    I'm Syed Sufiyan,
                    <br />a passionate Frontend Developer
                    <br />crafting seamless, responsive,
                    <br />and user-centric web experiences.
                </h1>

                <div className="flex items-center space-x-4">
                    <a href="https://github.com/syedsufiyan888" target='_blank' className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/syedsufiyan888" target='_blank' className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://drive.google.com/file/d/19rX1R20pBoV1LPq9J6Zc7NOBeWCHIA-D/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
            <div className="bg-slate-100 shadow-md rounded-lg p-2 my-2 ">
                <h2 className="text-center p-3 text-base font-bold">Featured Project</h2>
                <a href="https://e-commerce-app-using-react.netlify.app/" target="_blank" className="block">
                    <img
                        src={ecommerce}
                        alt="Ecommerce App image"
                        className="mb-3 rounded-md w-full object-cover h-40"
                    />
                    <h3 className="text-lg font-semibold mb-1">
                        E-commerce App <span className="text-xs">using ReactJS</span>
                    </h3>
                </a>
                <div className="flex items-center space-x-1 mb-1">
                    <span className="text-gray-600">-</span>
                    <a href="https://e-commerce-app-using-react.netlify.app/" target="_blank" className="text-blue-600 hover:underline text-sm">Live-Demo*</a>
                    <a href="https://github.com/syedsufiyan888/E-commerce" target="_blank" className="text-blue-600 hover:underline text-sm">github*</a>
                </div>
                <p className="text-gray-700 text-sm">
                    Features / Functionality:
                    <ol className="list-disc pl-4">
                        <li>Fetches products dynamically using API with async/await</li>
                        <li>Implements Single Page Application (SPA) for seamless navigation</li>
                        <li>Utilizes local storage to persist user data and preferences</li>
                        <li>Efficient API fetching for real-time updates</li>
                        <li>Incorporates <code>react-loader-spinner</code> for loading animations</li>
                        <li>Uses <code>react-router-dom</code> for efficient client-side routing</li>
                    </ol>
                </p>
            </div>

        </div>




    );
};

export default Home;