const app: string = `
<div id="register-banner">
<div id="banner-layer">
  <h1>Seja bem-vindo</h1>
</div>
</div>
<div id="register-form">
<h2>Crie sua conta:</h2>
<p>Registre-se para utilizar todas as funcionalidades do sistema</p>
<div class="form-control">
  <label for="name">Nome</label>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Digite o seu nome"
  />
</div>
<div class="form-control">
  <label for="email">E-mail</label>
  <input
    type="text"
    type="email"
    id="email"
    placeholder="Digite o seu e-mail"
  />
</div>
<div class="form-control">
  <label for="password">Senha</label>
  <input
    type="password"
    id="password"
    placeholder="Digite a sua senha"
  />
</div>
<p>
  Quer ajuda para criar uma senha segura?
  <span id="open-generate-password">Clique aqui.</span>
</p>
<div id="generate-options" class="hide">
  <p>Selecione as opções que você deseja</p>
  <div class="form-control">
    <label for="length">Quantidade de caracteres:</label>
    <input type="text" id="length" name="length" value="10" />
  </div>
  <div class="form-control">
    <label for="letters">Letras:</label>
    <input type="checkbox" id="letters" name="letters" checked />
  </div>
  <div class="form-control">
    <label for="numbers">Números:</label>
    <input type="checkbox" id="numbers" name="numbers" checked />
  </div>
  <div class="form-control">
    <label for="symbols">Símbolos:</label>
    <input type="checkbox" id="symbols" name="symbols" checked />
  </div>
  <button id="generate-password">Criar senha</button>
</div>
<div id="generated-password">
  <p>Aqui está a sua senha:</p>
  <h4></h4>
  <button id="copy-password">Copiar</button>
</div>
<div class="form-control">
  <label for="confirmpassword">Confirmação de Senha</label>
  <input
    type="password"
    id="confirmpassword"
    placeholder="Confirme a sua senha"
  />
</div>
<input type="submit" value="Cadastrar" />
</div>
`;

export default app;
