// Feedback de sucesso no formulário
document.getElementById('preCadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const button = e.target.querySelector('button');
    button.innerHTML = 'Enviando...';
    button.disabled = true;

    try {
        const formData = new FormData(e.target);
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            window.location.href = 'obrigado.html'; // Página de agradecimento
        } else {
            alert('Erro ao enviar. Tente novamente ou contate suporte@oseva.com');
        }
    } catch (error) {
        alert('Falha na conexão. Verifique sua internet.');
    } finally {
        button.innerHTML = 'Quero meu diagnóstico grátis →';
        button.disabled = false;
    }
});