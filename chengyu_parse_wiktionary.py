import sys
import json

import mwxml

paths = [sys.argv[1]]


def process_dump(dump, path):
    for page in dump:
        for revision in page:
            if revision.text is None or '|cat=cy' not in revision.text:
                continue
            yield {'title': page.title, 'text': revision.text}


for el in mwxml.map(process_dump, paths):
    print(json.dumps(el))
