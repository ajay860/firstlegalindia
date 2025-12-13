import React, { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Container,
  Typography,
  Box,
  Divider,
  Breadcrumbs,
  TextField,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { MENU_DATA } from '../../config/menu';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  /* ================= DATA PROCESSING ================= */

  // ✅ De-duplicate topics by link
  const allTopics = useMemo(() => {
    const map = new Map();

    MENU_DATA.forEach(category => {
      category.sections.forEach(section => {
        section.items.forEach(item => {
          if (!map.has(item.link)) {
            map.set(item.link, {
              ...item,
              category: category.title,
              section: section.heading,
            });
          }
        });
      });
    });

    return Array.from(map.values());
  }, []);

  const filteredTopics = useMemo(() => {
    if (!searchTerm) return allTopics;
    const term = searchTerm.toLowerCase();

    return allTopics.filter(topic =>
      topic.label.toLowerCase().includes(term) ||
      topic.category.toLowerCase().includes(term) ||
      topic.section.toLowerCase().includes(term)
    );
  }, [searchTerm, allTopics]);

  const groupedTopics = useMemo(() => {
    return filteredTopics.reduce((acc, topic) => {
      acc[topic.category] = acc[topic.category] || [];
      acc[topic.category].push(topic);
      return acc;
    }, {});
  }, [filteredTopics]);

  /* ================= UI ================= */

  return (
    <Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>

        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link component={RouterLink} to="/" underline="hover">
            Home
          </Link>
          <Typography color="text.primary">Topics</Typography>
        </Breadcrumbs>

        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Browse Topics
          </Typography>
          <Typography color="text.secondary" maxWidth={800} mx="auto">
            Quickly find topics by searching across categories, sections, and services.
          </Typography>
        </Box>

        {/* Search */}
        <Box
          sx={{
            maxWidth: 600,
            mx: 'auto',
            mb: 8,
            position: 'sticky',
            top: 80,
            zIndex: 10,
            // bgcolor: 'background.default',
            py: 2,
            mt: 5
          }}
        >
          <TextField
            fullWidth
            placeholder="Search topics, categories, or sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearchTerm('')}>
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '999px',
                bgcolor: 'background.paper',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              },
            }}
          />
        </Box>

        {/* Categories */}
        {Object.entries(groupedTopics).map(([category, topics]) => (
          <Box
            key={category}
            sx={{
              mb: 8,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              bgcolor: 'background.paper',
            }}
          >
            {/* Category Header */}
            <Box
              sx={{
                bgcolor: 'grey.900',
                color: 'common.white',
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 5 },
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" fontWeight={600} gutterBottom>
                {category}
              </Typography>
              <Typography sx={{ opacity: 0.85 }}>
                {topics.length} topics available
              </Typography>
            </Box>

            {/* Topic List */}
            <Box sx={{ px: { xs: 3, md: 5 }, py: 4 }}>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    md: '1fr 1fr 1fr',
                  },
                  gap: 3,
                }}
              >
                {topics.map(topic => (
                  <Box
                    component="li"
                    key={topic.link}
                    sx={{
                      borderLeft: '4px solid',
                      borderColor: 'primary.main',
                      pl: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <Typography
                      component={RouterLink}
                      to={topic.link}
                      sx={{
                        textDecoration: 'none',
                        fontWeight: 600,
                        color: 'text.primary',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {topic.label}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {topic.section}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}

        {/* Empty State */}
        {filteredTopics.length === 0 && (
          <Box textAlign="center" py={10}>
            <Typography variant="h6" gutterBottom>
              No topics found 😕
            </Typography>
            <Typography color="text.secondary">
              Try searching by category name, section, or keyword.
            </Typography>
          </Box>
        )}
      </Container>

      {/* CTA */}
      <Box bgcolor="grey.100" py={{ xs: 8, md: 10 }}>
        <Container maxWidth="md" textAlign="center">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Contact us today to discuss how we can help.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
