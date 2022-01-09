#!/usr/bin/env bash
set -ex

cd ${CIRCLE_WORKING_DIRECTORY}/www
export JEST_JUNIT_ADD_FILE_ATTRIBUTE='true'

pattern="tests/*"
prefix="${CIRCLE_WORKING_DIRECTORY}/www/"

circleci tests glob ${pattern} > "${prefix}test_filenames.txt"

tests=$(cat "${prefix}test_filenames.txt")
for line in $tests
do
  echo ${line}
  echo "$prefix$line" >> updated_tests.txt
done

TESTFILES=$(circleci tests split --split-by=timings --timings-type=classname "${prefix}updated_tests.txt")
echo ${TESTFILES}

npx playwright test --workers=1 --config="${prefix}playwright.config.js" ${TESTFILES}
