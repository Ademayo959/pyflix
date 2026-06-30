const Navbar = () => {
    return ( 
        <div className="font-inter">
            <div className="flex justify-between max-w-7xl mx-auto items-center py-4">
                <div>
                    <p className="text-gold text-2xl font-mono">PYFLIX</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-gray-600 tracking-wider">BROWSE</p>
                    <p className="text-gray-600 tracking-wider">TOP RATED</p>
                    <p className="text-gray-600 tracking-wider">GENRES</p>
                    <p className="text-gray-600 tracking-wider">NEW RELEASES</p>
                </div>
                <div className="flex items-center">
                    <div className="w-30 h-10 flex items-center justify-center">
                        <p>SIGN IN</p>
                    </div>
                    <div className="w-30 h-10 bg-gold flex items-center justify-center">
                        <p>START FREE</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;