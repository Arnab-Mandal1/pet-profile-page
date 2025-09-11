import ShareButton from './ShareButton';

const ShareSection = () => {
    return (
        <section id="share" className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-orange-800 mb-6">Share My Page!</h2>
            <div className="flex justify-center gap-4">
                <ShareButton platform="Copy Link"/>
                <ShareButton platform="X"/>
                <ShareButton platform="Facebook"/>
            </div>
        </section>
    );
};

export default ShareSection;