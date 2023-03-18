// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

 var captureOutboundLink = function(url, acao, rotulo) {
    ga('send', 'event', 'menu', acao, rotulo, {
      'transport': 'beacon',
      'hitCallback': function(){document.location = url;}
    });
    console.log(url )
 }

function tag_Lorem() {
    ga('send', 'event', 'analise', 'ver_mais', 'Lorem')
  }

function tag_Ipsum(){
    ga('send', 'event', 'analise', 'ver_mais', 'Ipsum')
}

function tag_Dolor(){
    ga('send', 'event', 'analise', 'ver_mais', 'Dolor')
}

function tag_nome_form() {
    ga('send', 'event', 'contato', 'nome', 'preencheu')
}

function tag_email_form() {
    ga('send', 'event', 'contato', 'email', 'preencheu')
}

function tag_telefone_form() {
    ga('send', 'event', 'contato', 'telefone', 'preencheu')
}

function enviado(){
    ga('send', 'event', 'contato', 'enviado', 'enviado');
}