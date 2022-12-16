#!/usr/bin/env python3

import json
import sys

import hanziconv

results = []
for line in sys.stdin:
    j = json.loads(line)
    title = j['title']
    text = j['text']
    last_line = text.split('\n')[-1]
    if not last_line.startswith('#'):
        continue
    if '{' in last_line or '|' in last_line:
        continue
    last_line = last_line.replace('[', '')
    last_line = last_line.replace(']', '')
    last_line = last_line.replace('#', '')
    if len(title) != 4:
        continue
    title = hanziconv.HanziConv.toSimplified(title)
    results.append([title, last_line])

print(json.dumps(results, indent=2, ensure_ascii=False))
