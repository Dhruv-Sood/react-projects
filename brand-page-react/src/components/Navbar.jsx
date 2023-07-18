function Navbar() {
    return (
        <>
            <header class="flex justify-between items-center px-6 py-4">
                <div className="hidden sm:block">
                    <img src="../../public/brand_logo.png" alt="" />
                </div>

                <div>
                    <ul className="list-none flex gap-4 text-sm md:text-xl font-mono">
                        <li className="list-hover border-2 border-white">Menu</li>
                        <li className="list-hover border-2 border-white">Location</li>
                        <li className="list-hover border-2 border-white">About</li>
                        <li className="list-hover border-2 border-white">Contact</li>
                    </ul>
                </div>
                <div class="btn hidden md:block text-white bg-red-500 text-center rounded-lg h-auto p-[6px]">
                    Login
                </div>

            </header>
        </>
    );
}
export default Navbar;
