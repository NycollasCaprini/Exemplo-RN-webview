import WebViewSeguro from "../components/WebViewSeguro";

function PageIFPR() {
    return (
        <WebViewSeguro
            url="https://www.ifpr.edu.br"
            dominio="ifpr.edu.br"
            javascript={false}
        />
    )
}

export default PageIFPR;
