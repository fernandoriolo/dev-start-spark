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
    question: "Qual é a principal diferença entre Front-end e Back-end no desenvolvimento web?",
    options: [
      { letter: "A", text: "Front-end cuida do banco de dados, Back-end cuida do visual" },
      { letter: "B", text: "Front-end é o que o usuário vê e interage, Back-end é a lógica e dados no servidor" },
      { letter: "C", text: "Front-end só funciona em celulares, Back-end só em computadores" },
      { letter: "D", text: "Front-end usa apenas HTML, Back-end usa apenas CSS" },
      { letter: "E", text: "Não existe diferença, são a mesma coisa" },
      { letter: "F", text: "Front-end é para sites antigos, Back-end é para sites modernos" }
    ],
    correctAnswer: "B",
    explanation: "O Front-end é a parte visual que o usuário vê (HTML, CSS, JavaScript), enquanto o Back-end processa dados, regras de negócio e se comunica com bancos de dados no servidor."
  },
  {
    id: 2,
    topic: "Biblioteca de Desenvolvimento",
    question: "O que é uma biblioteca de desenvolvimento (library) em programação?",
    options: [
      { letter: "A", text: "Um lugar físico onde desenvolvedores estudam" },
      { letter: "B", text: "Um programa para escrever código mais rápido" },
      { letter: "C", text: "Um conjunto de código pronto que pode ser reutilizado em projetos" },
      { letter: "D", text: "Um site com tutoriais de programação" },
      { letter: "E", text: "Uma linguagem de programação nova" },
      { letter: "F", text: "Um tipo especial de banco de dados" }
    ],
    correctAnswer: "C",
    explanation: "Uma biblioteca é um conjunto de funções e códigos prontos que desenvolvedores podem usar em seus projetos, evitando 'reinventar a roda'. Exemplos: React, Lodash, Axios."
  },
  {
    id: 3,
    topic: "Magic Link",
    question: "O que é um Magic Link no contexto de autenticação de usuários?",
    options: [
      { letter: "A", text: "Um link que faz download automático de arquivos" },
      { letter: "B", text: "Um link enviado por email que permite login sem digitar senha" },
      { letter: "C", text: "Um atalho para a página inicial do site" },
      { letter: "D", text: "Um link que funciona apenas em dispositivos Apple" },
      { letter: "E", text: "Um tipo de URL que nunca expira" },
      { letter: "F", text: "Um link para recuperar arquivos deletados" }
    ],
    correctAnswer: "B",
    explanation: "Magic Link é um método de autenticação onde o usuário recebe um link único por email. Ao clicar, ele é automaticamente logado, sem precisar lembrar senhas."
  },
  {
    id: 4,
    topic: "Next.js",
    question: "O que é Next.js?",
    options: [
      { letter: "A", text: "Um banco de dados para armazenar informações" },
      { letter: "B", text: "Uma linguagem de programação criada pelo Google" },
      { letter: "C", text: "Um framework React para criar aplicações web com recursos avançados" },
      { letter: "D", text: "Um aplicativo para editar imagens" },
      { letter: "E", text: "Um sistema operacional para servidores" },
      { letter: "F", text: "Uma extensão do navegador Chrome" }
    ],
    correctAnswer: "C",
    explanation: "Next.js é um framework baseado em React que facilita a criação de sites e aplicações web, oferecendo recursos como renderização no servidor, rotas automáticas e otimização de performance."
  },
  {
    id: 5,
    topic: "UX e UI",
    question: "Qual a diferença entre UX (User Experience) e UI (User Interface)?",
    options: [
      { letter: "A", text: "UX é a experiência completa do usuário, UI é o design visual da interface" },
      { letter: "B", text: "UX é para aplicativos móveis, UI é para sites" },
      { letter: "C", text: "UX cuida das cores, UI cuida dos textos" },
      { letter: "D", text: "São exatamente a mesma coisa, só nomes diferentes" },
      { letter: "E", text: "UX é feito por programadores, UI por gerentes" },
      { letter: "F", text: "UX é o código por trás, UI é o banco de dados" }
    ],
    correctAnswer: "A",
    explanation: "UX (User Experience) foca em como o usuário se sente ao usar o produto, enquanto UI (User Interface) cuida dos elementos visuais como botões, cores, ícones e layout."
  },
  {
    id: 6,
    topic: "SaaS",
    question: "O que significa SaaS (Software as a Service)?",
    options: [
      { letter: "A", text: "Software que só funciona offline" },
      { letter: "B", text: "Software disponibilizado pela internet, geralmente por assinatura" },
      { letter: "C", text: "Um tipo de vírus de computador" },
      { letter: "D", text: "Software que você precisa instalar via CD" },
      { letter: "E", text: "Uma linguagem de programação" },
      { letter: "F", text: "Software apenas para grandes empresas" }
    ],
    correctAnswer: "B",
    explanation: "SaaS é um modelo onde o software é acessado pela internet (na nuvem) e você paga pelo uso, geralmente mensalmente. Exemplos: Netflix, Spotify, Google Docs, Slack."
  },
  {
    id: 7,
    topic: "Pipeline",
    question: "No desenvolvimento de software, o que é um Pipeline (ou CI/CD Pipeline)?",
    options: [
      { letter: "A", text: "Um cabo que conecta o computador à internet" },
      { letter: "B", text: "Uma sequência automatizada de etapas para testar e publicar código" },
      { letter: "C", text: "Um tipo de banco de dados muito rápido" },
      { letter: "D", text: "Uma linguagem de programação para jogos" },
      { letter: "E", text: "Um programa para criar apresentações" },
      { letter: "F", text: "Uma pasta especial no computador" }
    ],
    correctAnswer: "B",
    explanation: "Um Pipeline é uma série de etapas automatizadas (testes, build, deploy) que o código passa antes de ir para produção, garantindo qualidade e agilidade nas entregas."
  },
  {
    id: 8,
    topic: "Dados Mockados",
    question: "O que são dados mockados (mock data) no desenvolvimento?",
    options: [
      { letter: "A", text: "Dados reais de usuários em produção" },
      { letter: "B", text: "Dados falsos/simulados usados para testar a aplicação" },
      { letter: "C", text: "Dados que foram hackeados" },
      { letter: "D", text: "Dados que vêm de outros países" },
      { letter: "E", text: "Dados que só funcionam no navegador Chrome" },
      { letter: "F", text: "Dados armazenados em pendrives" }
    ],
    correctAnswer: "B",
    explanation: "Dados mockados são informações fictícias criadas para simular dados reais durante o desenvolvimento e testes, sem precisar acessar um banco de dados real."
  },
  {
    id: 9,
    topic: "MCP",
    question: "O que é MCP (Model Context Protocol) no contexto de IA e desenvolvimento?",
    options: [
      { letter: "A", text: "Um tipo de processador de computador" },
      { letter: "B", text: "Um protocolo que permite IAs se conectarem a ferramentas e dados externos" },
      { letter: "C", text: "Uma linguagem de programação para robôs" },
      { letter: "D", text: "Um formato de arquivo de imagem" },
      { letter: "E", text: "Um sistema operacional para celulares" },
      { letter: "F", text: "Um método de criptografia de senhas" }
    ],
    correctAnswer: "B",
    explanation: "MCP (Model Context Protocol) é um padrão que permite que modelos de IA se conectem a ferramentas, APIs e fontes de dados externas, ampliando suas capacidades."
  },
  {
    id: 10,
    topic: "npm run dev",
    question: "O que acontece quando você executa 'npm run dev' em um projeto?",
    options: [
      { letter: "A", text: "Deleta todos os arquivos do projeto" },
      { letter: "B", text: "Publica o site na internet" },
      { letter: "C", text: "Inicia o servidor de desenvolvimento local para testar a aplicação" },
      { letter: "D", text: "Faz download de um novo projeto" },
      { letter: "E", text: "Envia o código para o GitHub" },
      { letter: "F", text: "Desinstala todas as dependências" }
    ],
    correctAnswer: "C",
    explanation: "O comando 'npm run dev' inicia um servidor de desenvolvimento local, permitindo que você veja e teste suas alterações no navegador em tempo real."
  },
  {
    id: 11,
    topic: "Localhost",
    question: "O que é 'localhost' no desenvolvimento web?",
    options: [
      { letter: "A", text: "Um site famoso de hospedagem" },
      { letter: "B", text: "O endereço que representa seu próprio computador como servidor" },
      { letter: "C", text: "Uma rede social para programadores" },
      { letter: "D", text: "O nome do criador da internet" },
      { letter: "E", text: "Um tipo de vírus de computador" },
      { letter: "F", text: "Uma empresa de cloud computing" }
    ],
    correctAnswer: "B",
    explanation: "Localhost é o endereço (127.0.0.1) que aponta para seu próprio computador, usado para testar aplicações localmente antes de publicá-las na internet."
  },
  {
    id: 12,
    topic: "Arquivo .env",
    question: "Para que serve o arquivo .env em um projeto?",
    options: [
      { letter: "A", text: "Para definir as cores do site" },
      { letter: "B", text: "Para guardar variáveis de ambiente como senhas e chaves de API de forma segura" },
      { letter: "C", text: "Para escrever o código principal da aplicação" },
      { letter: "D", text: "Para armazenar imagens do projeto" },
      { letter: "E", text: "Para criar animações" },
      { letter: "F", text: "Para definir quais navegadores são compatíveis" }
    ],
    correctAnswer: "B",
    explanation: "O arquivo .env armazena variáveis de ambiente (como chaves de API e senhas) separadas do código, mantendo informações sensíveis seguras e fora do controle de versão."
  },
  {
    id: 13,
    topic: "Lint",
    question: "O que faz uma ferramenta de Lint (como ESLint) no desenvolvimento?",
    options: [
      { letter: "A", text: "Comprime imagens para o site ficar mais rápido" },
      { letter: "B", text: "Analisa o código para encontrar erros e problemas de estilo" },
      { letter: "C", text: "Traduz o site para outros idiomas" },
      { letter: "D", text: "Cria backup do código automaticamente" },
      { letter: "E", text: "Converte o código para PDF" },
      { letter: "F", text: "Faz deploy automático do site" }
    ],
    correctAnswer: "B",
    explanation: "Ferramentas de Lint analisam seu código em busca de erros, bugs potenciais e problemas de formatação, ajudando a manter o código limpo e padronizado."
  },
  {
    id: 14,
    topic: "RLS (Row Level Security)",
    question: "O que é RLS (Row Level Security) em bancos de dados?",
    options: [
      { letter: "A", text: "Um tipo de backup de dados" },
      { letter: "B", text: "Uma regra que controla quais linhas/registros cada usuário pode acessar" },
      { letter: "C", text: "Uma forma de ordenar dados alfabeticamente" },
      { letter: "D", text: "Um método para acelerar consultas" },
      { letter: "E", text: "Uma linguagem de programação para bancos" },
      { letter: "F", text: "Um formato de exportação de dados" }
    ],
    correctAnswer: "B",
    explanation: "RLS é uma funcionalidade de segurança que define políticas para controlar quais registros (linhas) cada usuário pode ver, editar ou deletar no banco de dados."
  },
  {
    id: 15,
    topic: "Edge Functions",
    question: "O que são Edge Functions no desenvolvimento web?",
    options: [
      { letter: "A", text: "Funções que só funcionam no navegador Edge da Microsoft" },
      { letter: "B", text: "Código que roda em servidores próximos ao usuário, na 'borda' da rede" },
      { letter: "C", text: "Funções para criar bordas em imagens" },
      { letter: "D", text: "Um tipo de animação CSS" },
      { letter: "E", text: "Funções que só funcionam offline" },
      { letter: "F", text: "Um método antigo de programação" }
    ],
    correctAnswer: "B",
    explanation: "Edge Functions são funções serverless executadas em servidores distribuídos globalmente, próximos aos usuários, oferecendo respostas mais rápidas e menor latência."
  }
];
