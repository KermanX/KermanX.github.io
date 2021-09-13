echo "Enter Commit Message"
read msg

cd "../"
hugo -d docs/
git add .
git commit -m "$msg"
git push

echo "END"
pause