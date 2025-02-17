// Validação e feedback do formulário
document.getElementById('preCadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert('Cadastro realizado! Em breve enviaremos seu acesso às ferramentas.');
        e.target.reset();
    } else {
        alert('Oops! Algo deu errado. Tente novamente.');
    }
});
