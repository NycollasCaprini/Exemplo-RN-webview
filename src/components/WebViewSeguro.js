import { WebView } from "react-native-webview";
import { Linking } from "react-native";

function WebViewSeguro(props) {

    function dominioPermitido(url) {
        try {
            const host = new URL(url).hostname
            return host === props.dominio || host.endsWith("." + props.dominio)
        } catch {
            return false
        }
    }

    function interceptar(requisicao) {
        if (requisicao.url.startsWith("https://") && dominioPermitido(requisicao.url)) {
            return true
        }
        if (requisicao.isTopFrame === false) {
            return false
        }
        if (requisicao.url.startsWith("https://") || requisicao.url.startsWith("http://")) {
            Linking.openURL(requisicao.url).catch(() => { })
        }
        return false
    }

    return (
        <WebView
            style={{ flex: 1 }}
            source={{ uri: props.url }}
            originWhitelist={["https://*"]}
            onShouldStartLoadWithRequest={interceptar}
            javaScriptEnabled={props.javascript}
            domStorageEnabled={props.javascript}
            setSupportMultipleWindows={false}
            allowFileAccess={false}
            mixedContentMode="never"
        />
    )
}

export default WebViewSeguro;
