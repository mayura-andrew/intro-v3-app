const DocsPage = ({params}) => {
    return (
        <div>
        id : {params.id} <br/>
        title : {params.title}
        </div>
    );
};

export default DocsPage;