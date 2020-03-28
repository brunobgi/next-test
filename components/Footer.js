const Footer = () => (
    <>
        <footer>
            <a href="https://github.com/brunobgi"
                target="_blank"
                rel="noopener noreferrer" title="Zeit CO">
                Powered by &larr; Bruno Oliveira &rarr;
            </a>
        </footer>
        <style jsx>{`
            footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            }
        
            footer img {
            margin-left: 0.5rem;
            }
        
            footer a {
            display: flex;
            justify-content: center;
            align-items: center;

            }
        `}</style>
    </>
)

export default Footer