export default function Loading() {
    return (
        <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 space-y-8 animate-pulse">
            <div className="w-32 h-32 bg-neutral-900 rounded-full" />
            <div className="space-y-4 text-center">
                <div className="w-64 h-8 bg-neutral-900 rounded mx-auto" />
                <div className="w-48 h-4 bg-neutral-900 rounded mx-auto" />
            </div>
        </div>
    );
}
