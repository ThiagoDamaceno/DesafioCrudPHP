<?php 
    function getConection() {
        try {
            $conexao = new PDO('mysql:host=localhost;dbname=crud', 'root', '');
    
            return $conexao;
        } catch(PDOException $err) {
            echo '<pre>';
            echo print_r($err);
            echo '</pre>';
        }
    }

    function obterDados() {
        $conexao = getConection();

        $query = 'select nome, descricao from Card';

        $statement = $conexao->query($query);

        echo json_encode($statement->fetchAll());
    }

    function cadastrarDado($novoDado) {
        $conexao = getConection();

        $query = 'insert into Card (nome, descricao) values (:nome, :descricao)';

        $stmt = $conexao->prepare($query);
        $stmt->bindValue('nome', $novoDado->nome);
        $stmt->bindValue('descricao', $novoDado->descricao);

        $stmt->execute();
    }

    //Criar tabela
    $conexao = getConection();
    $conexao->exec(
        '
            create table if not exists Card (
                nome varchar(255) not null,
                descricao varchar(1000) not null
            )
        '
    );
    header("Access-Control-Allow-Origin:*");  
    header("Content-type: application/json");


    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        obterDados();
    }

    if ($method === 'POST') {
        $data = file_get_contents('php://input');
        $obj = json_decode($data);

        cadastrarDado($obj);

        echo json_encode($obj, true);
    }   

?>
