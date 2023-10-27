<?php 
    namespace users
    {
        class User
        {
            private readonly int $id;
            private string $username;
            private string $password;

            public function __construct(int $id, string $username, string $password = '')
            {
                $this->id = $id;
                $this->username = $username;
                $this->password = $password;
            }

            public function getId(): int
            {
                return $this->id;
            }

            public function getUsername(): string
            {
                return $this->username;
            }

            public function setUsername(string $username): void
            {
                $this->username = $username;
            }

            public function getPassword(): ?string
            {
                return $this->password;
            }

            public function setPassword(string $password): void
            {
                $this->password = $password;
            }

            public function __toString(): string
            {
                return $this->username.' : '.$this->password;
            }
        }
        
        final class PlayerUser extends User
        {
            private int $wins;
            private int $losses;

            public function __construct(int $id, string $username, $password = null)
            {
                parent::__construct($id, $username, $password);
            }

            public function getWins(): int
            {
                return $this->wins;
            }

            public function setWins(int $wins): void
            {
                $this->wins = $wins;
            }

            public function getLosses(): int
            {
                return $this->losses;
            }

            public function setLosses(int $losses): void
            {
                $this->losses = $losses;
            }
        }

        final class Administrator extends User
        {
            public function __construct(string $username, $password = null)
            {
                parent::__construct($username, $password);
            }
        }
    }
?>