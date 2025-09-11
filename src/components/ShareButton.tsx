type ShareButtonProps = {
    platform: string;
    url?: string;
};

const ShareButton = ({platform, url}: ShareButtonProps) => {
    const share = () => {
        const pageUrl = url || window.location.href;
        switch (platform) {
            case 'Copy Link':
                navigator.clipboard.writeText(pageUrl);
                alert('Link copied to clipboard!');
                break;
            case 'X':
                window.open(`https://twitter.com/intent/tweet?url=${pageUrl}`, '_blank');
                break;
            case 'Facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank');
                break;
        }
    };

    return (
        <button onClick={share}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            {platform}
        </button>
    );
};

export default ShareButton;