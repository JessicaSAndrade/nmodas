if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote", // nome do atributo data-slide="principal"
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
    });

    new SimpleSlide({
        slide: "portfolio", // nome do atributo data-slide="principal"
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
        nav: true
    });
}

if (window.SimpleAnime) {
    new SimpleAnime
}

new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><p>Um erro ocorreu, Por favor, entre em contato por meio de outras de nossas redes sociais</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});