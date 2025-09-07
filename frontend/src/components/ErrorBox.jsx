function ErrorBox({error}){
    if(!error) return null;
    return(
        <div className="bg-red-900 border border-red-700 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 text-red-300">
                <span className="text-2xl">❌</span>
                <span className="text-lg">{error}</span>

            </div>

        </div>
    )
}

export default ErrorBox;