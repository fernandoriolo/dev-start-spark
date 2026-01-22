export interface QuizQuestion {
  id: number;
  topic: string;
  question: string;
  options: {
    letter: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topic: "Front-end e Back-end",
    question: "Em uma aplicação web que exibe dados de usuários vindos de um banco de dados, qual parte é responsável por buscar esses dados?",
    options: [
      { letter: "A", text: "O Front-end, pois é ele que exibe os dados na tela do usuário" },
      { letter: "B", text: "O Back-end, pois ele processa requisições e acessa o banco de dados" },
      { letter: "C", text: "O navegador do usuário, que se conecta diretamente ao banco" },
      { letter: "D", text: "O CSS, que estiliza e organiza os dados para exibição" },
      { letter: "E", text: "O Front-end e o Back-end juntos, em uma única camada" },
      { letter: "F", text: "O HTML, que estrutura os dados vindos do servidor" }
    ],
    correctAnswer: "B",
    explanation: "O Back-end é responsável por processar requisições, aplicar regras de negócio e buscar dados no banco. O Front-end apenas recebe e exibe esses dados."
  },
  {
    id: 2,
    topic: "Biblioteca de Desenvolvimento",
    question: "Qual a diferença principal entre uma biblioteca e um framework?",
    options: [
      { letter: "A", text: "Bibliotecas são apenas para Front-end, frameworks são para Back-end" },
      { letter: "B", text: "Frameworks controlam o fluxo da aplicação, bibliotecas são chamadas quando você precisa" },
      { letter: "C", text: "Bibliotecas são pagas, frameworks são gratuitos" },
      { letter: "D", text: "Frameworks são conjuntos de bibliotecas, então são a mesma coisa" },
      { letter: "E", text: "Bibliotecas exigem instalação, frameworks funcionam no navegador" },
      { letter: "F", text: "Frameworks são mais leves e simples que bibliotecas" }
    ],
    correctAnswer: "B",
    explanation: "A diferença chave é a 'inversão de controle': em um framework, ele controla o fluxo e chama seu código. Em uma biblioteca, você controla o fluxo e chama a biblioteca quando precisa."
  },
  {
    id: 3,
    topic: "Magic Link",
    question: "Por que o Magic Link é considerado mais seguro que senha tradicional em alguns casos?",
    options: [
      { letter: "A", text: "Porque usa criptografia de 256 bits, enquanto senhas usam 128 bits" },
      { letter: "B", text: "Porque o link expira rapidamente e não pode ser reutilizado, eliminando senhas fracas" },
      { letter: "C", text: "Porque os links são armazenados no navegador de forma permanente" },
      { letter: "D", text: "Porque funciona apenas em redes Wi-Fi seguras" },
      { letter: "E", text: "Porque o usuário precisa confirmar por SMS além do email" },
      { letter: "F", text: "Porque substitui a autenticação de dois fatores completamente" }
    ],
    correctAnswer: "B",
    explanation: "Magic Links expiram em minutos e são de uso único, eliminando problemas como senhas fracas, reutilizadas ou vazadas. A segurança depende do acesso ao email."
  },
  {
    id: 4,
    topic: "Next.js",
    question: "Qual vantagem do Next.js sobre o React puro para SEO de um site?",
    options: [
      { letter: "A", text: "Next.js usa uma linguagem diferente que os buscadores entendem melhor" },
      { letter: "B", text: "Next.js permite renderização no servidor, entregando HTML pronto para indexação" },
      { letter: "C", text: "Next.js compila o código para uma versão mais leve que carrega mais rápido" },
      { letter: "D", text: "Next.js gera automaticamente meta tags sem necessidade de configuração" },
      { letter: "E", text: "Next.js bloqueia bots de busca para proteger o conteúdo" },
      { letter: "F", text: "React puro também tem SSR nativo, então não há diferença para SEO" }
    ],
    correctAnswer: "B",
    explanation: "Next.js oferece SSR (Server-Side Rendering) e SSG (Static Site Generation), enviando HTML renderizado para os buscadores, enquanto React puro envia JavaScript que precisa ser executado."
  },
  {
    id: 5,
    topic: "UX e UI",
    question: "Um usuário reclama que 'encontrar o botão de compra foi muito difícil'. Isso é um problema de:",
    options: [
      { letter: "A", text: "UI, pois o botão deveria ter uma cor mais chamativa" },
      { letter: "B", text: "UX, pois a jornada do usuário até a compra não foi bem planejada" },
      { letter: "C", text: "Front-end, pois o código do botão está incorreto" },
      { letter: "D", text: "UI, pois todos os problemas visuais são de interface" },
      { letter: "E", text: "Back-end, pois o botão não está carregando corretamente" },
      { letter: "F", text: "Acessibilidade, pois o botão não está visível para todos" }
    ],
    correctAnswer: "B",
    explanation: "A dificuldade em encontrar algo é um problema de experiência (UX) - a jornada e arquitetura da informação. Se o botão fosse feio mas fácil de achar, seria UI."
  },
  {
    id: 6,
    topic: "SaaS",
    question: "Uma empresa oferece seu software por R$50/mês com acesso via navegador. Se o cliente cancelar, perde o acesso. Isso caracteriza:",
    options: [
      { letter: "A", text: "Software on-premise, pois é acessado pela empresa" },
      { letter: "B", text: "SaaS, pois é software como serviço com modelo de assinatura" },
      { letter: "C", text: "PaaS, pois oferece uma plataforma para desenvolvimento" },
      { letter: "D", text: "Open Source, pois qualquer um pode acessar via navegador" },
      { letter: "E", text: "IaaS, pois infraestrutura é fornecida como serviço" },
      { letter: "F", text: "Licença perpétua, pois o pagamento é recorrente" }
    ],
    correctAnswer: "B",
    explanation: "SaaS (Software as a Service) é caracterizado por acesso via internet, modelo de assinatura, sem instalação local e perda de acesso ao cancelar."
  },
  {
    id: 7,
    topic: "Dados Mockados",
    question: "Quando é mais apropriado usar dados mockados em vez de dados reais?",
    options: [
      { letter: "A", text: "Em produção, para proteger dados sensíveis dos usuários" },
      { letter: "B", text: "Durante desenvolvimento e testes, quando a API real não está disponível" },
      { letter: "C", text: "Sempre, pois dados mockados são mais rápidos que dados reais" },
      { letter: "D", text: "Em aplicações financeiras, para evitar transações acidentais" },
      { letter: "E", text: "Quando o banco de dados está cheio e precisa de mais espaço" },
      { letter: "F", text: "Para substituir permanentemente APIs pagas e economizar custos" }
    ],
    correctAnswer: "B",
    explanation: "Mocks são usados em desenvolvimento/testes quando a API real não existe, está indisponível ou quando queremos testar cenários específicos de forma isolada."
  },
  {
    id: 8,
    topic: "MCP",
    question: "Qual cenário representa melhor o uso do MCP (Model Context Protocol)?",
    options: [
      { letter: "A", text: "Uma IA que gera imagens a partir de descrições de texto" },
      { letter: "B", text: "Uma IA que acessa seu Notion para buscar informações e atualizar páginas" },
      { letter: "C", text: "Um chatbot que responde perguntas apenas com seu conhecimento interno" },
      { letter: "D", text: "Um modelo de linguagem sendo treinado com novos dados" },
      { letter: "E", text: "Uma API REST tradicional comunicando dois sistemas" },
      { letter: "F", text: "Um banco de dados vetorial armazenando embeddings" }
    ],
    correctAnswer: "B",
    explanation: "MCP permite que IAs se conectem a ferramentas externas (Notion, Linear, bancos de dados) para ler e modificar dados, expandindo suas capacidades além do conhecimento interno."
  },
  {
    id: 9,
    topic: "npm run dev",
    question: "O que acontece internamente quando você executa 'npm run dev'?",
    options: [
      { letter: "A", text: "O npm compila o código TypeScript para JavaScript e publica online" },
      { letter: "B", text: "O npm executa o script 'dev' definido no package.json, geralmente iniciando um servidor local" },
      { letter: "C", text: "O npm baixa todas as dependências novamente do registro" },
      { letter: "D", text: "O npm cria uma versão de produção otimizada da aplicação" },
      { letter: "E", text: "O npm verifica erros de sintaxe e formata o código automaticamente" },
      { letter: "F", text: "O npm atualiza todas as dependências para as versões mais recentes" }
    ],
    correctAnswer: "B",
    explanation: "O comando 'npm run dev' executa o script chamado 'dev' no package.json. Geralmente este script inicia um servidor de desenvolvimento com hot reload."
  },
  {
    id: 10,
    topic: "Localhost",
    question: "Se você acessa 'localhost:3000' e 'localhost:8080' no mesmo computador, o que é verdade?",
    options: [
      { letter: "A", text: "São o mesmo servidor, apenas com URLs diferentes" },
      { letter: "B", text: "São servidores diferentes rodando em portas diferentes na mesma máquina" },
      { letter: "C", text: "O 3000 é para desenvolvimento e 8080 é para produção" },
      { letter: "D", text: "Apenas uma porta pode estar ativa por vez no localhost" },
      { letter: "E", text: "A porta 8080 é mais segura que a 3000 por ser maior" },
      { letter: "F", text: "Localhost só funciona com a porta padrão 80" }
    ],
    correctAnswer: "B",
    explanation: "Cada porta representa um serviço diferente. Você pode ter múltiplos servidores rodando simultaneamente em portas diferentes no mesmo localhost."
  },
  {
    id: 11,
    topic: "Arquivo .env",
    question: "Por que o arquivo .env geralmente está no .gitignore?",
    options: [
      { letter: "A", text: "Porque arquivos .env são muito grandes para o Git" },
      { letter: "B", text: "Para evitar que credenciais sensíveis sejam versionadas e expostas publicamente" },
      { letter: "C", text: "Porque o .env só funciona localmente e não no servidor" },
      { letter: "D", text: "Porque o Git não consegue ler arquivos sem extensão comum" },
      { letter: "E", text: "Para que cada desenvolvedor use exatamente as mesmas variáveis" },
      { letter: "F", text: "Porque variáveis de ambiente são geradas automaticamente pelo sistema" }
    ],
    correctAnswer: "B",
    explanation: "O .env contém segredos como chaves de API e senhas. Versioná-lo exporia essas credenciais a qualquer pessoa com acesso ao repositório."
  },
  {
    id: 12,
    topic: "Lint",
    question: "Qual problema o ESLint NÃO consegue detectar?",
    options: [
      { letter: "A", text: "Variáveis declaradas mas nunca utilizadas" },
      { letter: "B", text: "Lógica de negócio incorreta que produz resultados errados" },
      { letter: "C", text: "Uso de '==' em vez de '===' para comparações" },
      { letter: "D", text: "Imports de módulos que não existem" },
      { letter: "E", text: "Código que não segue o padrão de formatação definido" },
      { letter: "F", text: "Funções async sem await dentro delas" }
    ],
    correctAnswer: "B",
    explanation: "Linters analisam sintaxe e padrões de código, não semântica ou lógica de negócio. Se seu cálculo está errado mas sintaticamente correto, o ESLint não detecta."
  },
  {
    id: 13,
    topic: "RLS (Row Level Security)",
    question: "Em um sistema com RLS ativo, o que acontece quando um usuário tenta acessar dados de outro usuário?",
    options: [
      { letter: "A", text: "O sistema retorna um erro 403 Forbidden" },
      { letter: "B", text: "A query simplesmente não retorna as linhas que ele não tem permissão, como se não existissem" },
      { letter: "C", text: "O banco de dados bloqueia a conta do usuário por tentativa de invasão" },
      { letter: "D", text: "Os dados são retornados mas criptografados" },
      { letter: "E", text: "O sistema redireciona para a página de login" },
      { letter: "F", text: "Um log de auditoria é criado mas os dados são retornados" }
    ],
    correctAnswer: "B",
    explanation: "RLS filtra silenciosamente os resultados no nível do banco. O usuário simplesmente não vê as linhas não autorizadas, como se não existissem."
  },
  {
    id: 14,
    topic: "Edge Functions",
    question: "Por que uma Edge Function pode ter menor latência que uma função serverless tradicional?",
    options: [
      { letter: "A", text: "Porque Edge Functions usam linguagens de programação mais rápidas" },
      { letter: "B", text: "Porque são executadas em servidores geograficamente próximos ao usuário" },
      { letter: "C", text: "Porque Edge Functions não precisam de internet para funcionar" },
      { letter: "D", text: "Porque rodam no navegador do usuário, não em servidores" },
      { letter: "E", text: "Porque Edge Functions têm acesso direto ao hardware do servidor" },
      { letter: "F", text: "Porque são pré-compiladas e nunca precisam de cold start" }
    ],
    correctAnswer: "B",
    explanation: "Edge Functions rodam em CDNs distribuídas globalmente, executando o código no servidor mais próximo do usuário, reduzindo a distância física que os dados percorrem."
  }
];
