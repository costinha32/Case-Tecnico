# Backend Task API

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

## Testes

```bash
npm test
```

## Endpoints

### POST /insert-tasks

Insere tarefas:
```json
[
  {
    "description": "Criar Login",
    "responsable": "Caio",
    "status": "done"
  }
]
```

### GET /get-tasks

Retorna todas as tarefas cadastradas.
