import WebViewSeguro from "../components/WebViewSeguro";

function PageGov() {
    return (
        <WebViewSeguro
            url="https://www.gov.br"
            dominio="gov.br"
            javascript={true}
        />
    )
}

export default PageGov;
