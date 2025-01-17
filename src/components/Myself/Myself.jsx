import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div>
            <h1>Myself</h1>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;