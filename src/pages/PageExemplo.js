import WebViewSeguro from "../components/WebViewSeguro";

function PageExemplo() {
    return (
        <WebViewSeguro
            url="https://example.com"
            dominio="example.com"
            javascript={false}
        />
    )
}

export default PageExemplo;
