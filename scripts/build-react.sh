
  echo "Start executing commands..."

  # Execute the first command
  echo "Executing the first command: pnpm exec prettier . --write"
  if ! pnpm exec prettier . --write; then
    echo "Error in executing the first command!"
    sleep 5  # Pause for 5 seconds before retrying
    continue
  fi

  # Execute the second command
  echo "Executing the second command: npx prettier . --check"
  if ! npx prettier . --check; then
    echo "Error in executing the second command!"
    sleep 5
    continue
  fi

  # Execute the third command
  echo "Executing the third command: rm -rf dist"
  if ! rm -rf dist; then
    echo "Error in executing the third command!"
    sleep 5
    continue
  fi

  # Execute the fourth command
  echo "Executing the fourth command: pnpm run build"
  if ! pnpm run build; then
    echo "Error in executing the fourth command!"
    sleep 5
    continue
  fi
  echo "Done."

done

