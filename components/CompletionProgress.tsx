type CompletionProgressProps = {
    percentage: number;
};

const CompletionProgress = ({ percentage }: CompletionProgressProps) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const progress = (percentage / 100) * circumference;

    return (
        <div className="flex items-center ">
            <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                className="-rotate-90"
            >
                {/* Background circle */}
                <circle
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                />

                {/* Progress circle */}
                <circle
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={`${progress} ${circumference}`}
                />
            </svg>

            {/* Percentage in the center */}
            <div className="absolute text-center left-85">
                <p className="text-3xl font-semibold">{percentage}%</p>
                <p className="text-sm text-gray-500">complete</p>
            </div>
        </div>
    );
};

export default CompletionProgress;
