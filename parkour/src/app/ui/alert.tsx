"use client";

export default function Alert() {
    return (
        // position at bottom of screen and centered
        <div
            id="danger-alert"
            className="hidden fixed bottom-[50px] md:bottom-[18vh] left-1/2 transform -translate-x-1/2 items-center p-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800 max-w-[400px] min-w-[338px] rounded-md"
            role="alert"
        >
            <div className="flex justify-between">
                <svg
                    className="flex-shrink-0 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div id="alert-text" className="ms-3 text-sm font-medium">
                    Error
                </div>
                <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                    data-dismiss-target="#danger-alert"
                    aria-label="Close"
                    onClick={() => {
                        const alert = document.getElementById(
                            "danger-alert"
                        ) as HTMLDivElement | "";
                        if (alert) {
                            alert.classList.add("hidden");
                        } else {
                            console.log("Alert not found.");
                        }
                    }}
                >
                    <span className="sr-only">Dismiss</span>
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
