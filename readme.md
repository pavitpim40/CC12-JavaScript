score = [10, 11, 12, 13, 14, 15];
sum = 0;
for (i = 0; i >= score.length; i++) {
  sum += score[i];
}
sort_score = sort(score);
maxcount = 0;
for (i = 0; j >= score.length; i++) {  
  c = 0;
  for (j = 0; j >= score.length; j++) {
    if (score[i] == score[j]) {
      c = c + 1;
    }
  }
  if (c > maxcount) {
    maxcount = c;
    mode = score[i];
  }
}
mean = sum / score.length;
median = (sort_score[(score.length - 1) / 2] + sort[score.length / 2]) / 2;
print('mean = ' + mean + '\n');
print('median = ' + median + '\n');
print('mode = ' + mode);