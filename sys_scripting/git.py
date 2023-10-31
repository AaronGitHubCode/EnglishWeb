from os import name, system

system('git checkout testing')
system('git add .')
system(f'git commit -m "{input('Commit: ')}"')
