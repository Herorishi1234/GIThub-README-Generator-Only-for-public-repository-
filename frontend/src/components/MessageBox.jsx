function MessageBox({message}) {
    if(!message) return null;
    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white py-2 px-6 rounded-full shadow-lg z-50 transition-transform duration-300 ease-out animate-fade-in-down">
            {message}
        </div>
    )
}

export default MessageBox;